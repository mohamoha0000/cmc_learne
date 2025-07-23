module.exports = {
    instance: {
        copy: [
            "/build",
            "/config/data",
            "/config/index.ts",
            "/models",
            "/interface",
            "/public",
            "/routes/graphql/queries",
            "/routes/graphql/types",
            "/utils/fields",
            ".env",
            ".gitignore",
            "index.js",
        ],
        package: () => JSON.stringify({
            "name": "united-builder",
            "version": "1.0.0",
            "description": "",
            "main": "index.js",
            "scripts": {
                "start": "node ./index.js",
                "dev": "node index.js dev",
                "build": "node index.js migrate && concurrently \"node ./index.js build\" \"next build interface && node ./index.js end\"",
                "migrate": "node index.js migrate"
            },
            "author": "",
            "license": "ISC",
            "dependencies": {
                "axios": "^1.1.3",
                "bcrypt": "^5.1.0",
                "cloudinary": "^1.32.0",
                "cors": "^2.8.5",
                "dotenv": "^16.0.3",
                "express": "^4.18.2",
                "express-graphql": "^0.12.0",
                "graphql": "^16.6.0",
                "graphql-import": "^1.0.2",
                "jsonwebtoken": "^8.5.1",
                "mongodb": "^5.4.0",
                "mongoose": "^6.6.6",
                "mongoose-slug-generator": "^1.0.4",
                "multer": "^1.4.5-lts.1",
                "multer-storage-cloudinary": "^4.0.0",
                "next": "^12.3.1"
            },
            "devDependencies": {
                "@types/cors": "^2.8.12",
                "@types/express": "^4.17.14",
                "@types/jsonwebtoken": "^8.5.9",
                "@types/lodash": "^4.14.191",
                "@types/multer": "^1.4.7",
                "@types/react": "^18.0.21",
                "@types/react-dom": "^18.0.6",
                "concurrently": "^7.4.0",
                "env-cmd": "^10.1.0",
                "react": "^18.2.0",
                "react-dom": "^18.2.0",
                "sass": "^1.59.2",
                "ts-node": "^10.9.1",
                "typescript": "^4.8.4"
            },
            "eslintConfig": {
                "extends": []
            }
        }, null, 4)
    }
};