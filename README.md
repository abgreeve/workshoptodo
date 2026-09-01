# MoodleMoot Italia: JavaScript to React workshop

This repository contains the materials for the hands-on **JavaScript to React** workshop at MoodleMoot Italia 2026.

During the workshop we will progressively update a simple Moodle block to explore modern Moodle frontend development, moving from the existing JavaScript approach through ES modules, React, and theming.

The repository contains four workshop checkpoints:

* `master` — starting point
* `01-esm` — ES modules
* `02-react` — React
* `03-theming` — React theming

## Before the workshop

Please prepare and test your development environment **before attending the workshop**.

This is a hands-on development workshop and assumes that you are already comfortable working with Moodle source code. There will not be enough time during the workshop to set up or troubleshoot individual Moodle development environments.

You do not need previous experience with React.

## Recommended setup: your existing Moodle development environment

If you already have a Moodle development environment, this is the recommended option.

You will need:

* Git
* A code editor or IDE
* A working Moodle development environment
* The development tools needed to build Moodle's frontend code
* A web browser

### 1. Prepare Moodle

The workshop uses a specific Moodle 5.3 development version so that everyone is working with the same code.

From your Moodle source directory:

```bash id="ogb6vn"
git fetch origin
git checkout 6216fe4ed19a5a3c88c0951d1647e9f2d626bcbb
```

This is the Moodle **5.3dev weekly release from 18 August 2026**.

If you use this Moodle checkout for other development work, you may prefer to create a separate checkout for the workshop.

Make sure your Moodle installation is working normally before continuing.

### 2. Clone the workshop plugin

From your Moodle source directory:

```bash id="ur7wfs"
cd public/blocks
git clone https://github.com/abgreeve/workshoptodo.git
```

This should create:

```text id="nix84g"
public/blocks/workshoptodo
```

Log in to Moodle as an administrator and complete the Moodle upgrade to install the plugin.

### 3. Check your setup

Add the **Workshop todo** block to a Moodle page.

Before attending the workshop, make sure that:

* Moodle is running correctly.
* The Workshop todo block is installed.
* You can add the block to a page and see it.
* You can edit the files in `public/blocks/workshoptodo`.
* You can run Moodle's frontend development/build tools.

If all of these work, you're ready for the workshop.

## Alternative: Docker

If you don't already have a Moodle development environment, this repository also contains a prepared Docker environment.

You will need Docker and Git installed.

Clone the repository:

```bash id="87at6g"
git clone https://github.com/abgreeve/workshoptodo.git
cd workshoptodo
```

Start the workshop environment:

```bash id="p9j9rw"
./workshop start
```

The first time you start the environment, Moodle will be installed automatically. This may take a few minutes.

You can watch the installation progress with:

```bash id="fht43i"
./workshop logs
```

Wait until the logs show that the Moodle installation has completed.

Press `Ctrl+C` to stop watching the logs. This does not stop the workshop environment.

Once the installation has completed, open:

```text id="18tj4g"
http://localhost:8080
```

Log in with:

* **Username:** `admin`
* **Password:** `MoodleMoot!2026`

Add the **Workshop todo** block to a page to confirm that the environment is working.

### Docker workshop commands

The workshop helper provides several useful commands:

```bash id="k4zc4p"
./workshop build
./workshop checkpoint 01-esm
./workshop purge
./workshop logs
./workshop stop
./workshop reset
```

`reset` deletes the workshop database and Moodle data, but does not delete your source code or Git commits.

### Troubleshooting: port 8080 is already in use

If `./workshop start` reports an error similar to:

```text id="24sc0r"
Bind for 0.0.0.0:8080 failed: port is already allocated
```

another application or Docker container is already using port 8080.

You can check for another Docker container using the port with:

```bash id="h8bc6h"
docker ps
```

Stop the container or application using port 8080, then run:

```bash id="xum68h"
./workshop start
```

again.

## During the workshop

We will work through the different checkpoints together:

```text id="cpl5pi"
master → 01-esm → 02-react → 03-theming
```

You will make the changes yourself during the exercises. The checkpoint branches provide working versions that we can switch to as we progress through the workshop.

Please make sure your chosen development environment is working **before the workshop begins**.
