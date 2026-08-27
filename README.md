# MoodleMoot Italia: JavaScript to React workshop

This repository contains four workshop checkpoints: `master`, `01-esm`,
`02-react`, and `03-theming`.

## Docker setup

```bash
git clone https://github.com/abgreeve/workshoptodo.git
cd workshoptodo
./workshop start
```

Open <http://localhost:8080>. The initial installation can take a few minutes.

- Username: `admin`
- Password: `MoodleMoot!2026`

Add the **Workshop todo** block to confirm the exercise is working.

Build JavaScript with `./workshop build`. Switch checkpoints with, for example,
`./workshop checkpoint 01-esm`. Other commands are `purge`, `logs`, `stop`, and
`reset`. Reset deletes the workshop database and Moodle data but not source or
Git commits.

The Docker environment is optional. For an existing current Moodle `main`
environment, clone this repository into `public/blocks/workshoptodo`.
