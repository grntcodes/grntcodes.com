# How to Update Logs

Edit `public/logs.json` to add new log entries.

## Format

```json
{
  "id": 1,
  "date": "YYYY-MM-DD",
  "content": "your log message here. keep it short and technical.",
  "type": "code" | "deploy" | "note"
}
```

## Types
- `code` - code changes, features, refactors
- `deploy` - deployments, releases
- `note` - general updates, configs

## Tips
- Keep newest logs at the top (id 1)
- Use dates in YYYY-MM-DD format
- Keep content concise and lowercase
- No need to restart dev server - changes load on refresh
