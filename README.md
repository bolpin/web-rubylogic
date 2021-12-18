# Deployment

build and export, then tar up the out/ folder and
copy to the server

nginx configuration can be found at /etc/nginx/conf.d/*.conf
You may need to specify that 'root' points to wherever you untar the static filees. (/var/www/?)

### Run the development server:

```bash
npm run dev
```

### Build for production AND generate static website into "out" folder:

```bash
npm run build
```

### Run in production:

```bash
npm start
```

### API Routes:

GET /api/articles
GET /api/articles/:id

