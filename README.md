# www

This Next.js application is the static website of [le.taxi](https://le.taxi).

## Usage

### Run

Run the production version:

```
$> make run
```

To develop:

```
$> npm install
$> npm run dev
```

## Deployment


To deploy to production, setup the following remote and push the master branch.

```
git remote add clever git+ssh://git@push-n2-par-clevercloud-customers.services.clever-cloud.com/app_cafd1f3e-3516-4a85-9f60-7985d4da8b32.git
```

To connect to container, install [CleverCloud CLI](https://www.clever-cloud.com/doc/reference/clever-tools/getting_started/) and run the following commands:

```
clever link app_cafd1f3e-3516-4a85-9f60-7985d4da8b32

# Outputs "prod-www"
clever applications

clever ssh -a prod-www
```
