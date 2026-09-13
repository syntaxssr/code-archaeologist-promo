"""Aggregate this machine's Claude Code token usage from the local transcripts.

One assistant turn can be written to the transcript more than once (a resumed
or forked session repeats earlier lines), so every record is keyed by its
message id and counted once.
"""
import json, os, glob, collections, datetime

ROOT = os.path.expanduser("~/.claude/projects")
seen = set()
by_project = collections.Counter()
by_day = collections.Counter()
by_model = collections.Counter()
by_day_project = collections.defaultdict(collections.Counter)
turns = collections.Counter()
totals = collections.Counter()
split = {}

def pretty(project_dir):
    name = project_dir.replace("-Users-peeraponchanthacham-", "")
    for p in ("Documents-GitHub-", "Documents-", "Downloads-", "Downloads", "Library-"):
        if name.startswith(p):
            name = name[len(p):] or p.rstrip("-")
    return name or project_dir

# sorted so a message that appears in two transcripts is always attributed
# to the same one, and the totals do not move between runs
for path in sorted(glob.glob(os.path.join(ROOT, "*", "*.jsonl"))):
    project = pretty(os.path.basename(os.path.dirname(path)))
    with open(path, errors="ignore") as fh:
        for line in fh:
            if '"usage"' not in line:
                continue
            try:
                d = json.loads(line)
            except Exception:
                continue
            msg = d.get("message") or {}
            u = msg.get("usage")
            if not u or d.get("type") != "assistant":
                continue
            mid = msg.get("id") or d.get("uuid")
            if not mid or mid in seen:
                continue
            seen.add(mid)
            i = u.get("input_tokens", 0) or 0
            o = u.get("output_tokens", 0) or 0
            cc = u.get("cache_creation_input_tokens", 0) or 0
            cr = u.get("cache_read_input_tokens", 0) or 0
            total = i + o + cc + cr
            day = (d.get("timestamp") or "")[:10]
            by_project[project] += total
            by_model[msg.get("model") or "unknown"] += total
            if day:
                by_day[day] += total
                by_day_project[day][project] += total
            turns[project] += 1
            totals["input"] += i
            totals["output"] += o
            totals["cache_write"] += cc
            totals["cache_read"] += cr
            totals["total"] += total
            totals["turns"] += 1
            sp = split.setdefault(project, collections.Counter())
            sp["input"] += i; sp["output"] += o; sp["cache_write"] += cc; sp["cache_read"] += cr; sp["total"] += total; sp["turns"] += 1

out = {
    "totals": dict(totals),
    "by_project": by_project.most_common(),
    "by_model": by_model.most_common(),
    "by_day": sorted(by_day.items()),
    "turns_by_project": turns.most_common(),
    "by_day_project": {d: dict(c) for d, c in sorted(by_day_project.items())},
    "split_by_project": {k: dict(v) for k, v in split.items()},
    "days": len(by_day),
    "first_day": min(by_day) if by_day else None,
    "last_day": max(by_day) if by_day else None,
}
print(json.dumps(out, indent=1, ensure_ascii=False))
