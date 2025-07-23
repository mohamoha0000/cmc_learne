To this project running u need :
#1 install depencies on root folder
#2 install depencies on dashboard folder
#3 setup env variables for root : 
    PORT=2002
    HOST=http://localhost:2002
    SECRET_KEY=fzq8f48fz8f4qzz67zq
    DB_HOST=mongodb://localhost:27017
    DB_NAME=WebBuilder
    AUTH_SECRET=7bxJ*fz_d#F*T*Py
    CLOUD_NAME=elkommerce
    CLOUD_API_KEY=596631861464333
    CLOUD_API_SECRET=SYMulu4zI9XXlRJ1YuxHhHISCo4
#4 setup env variables for dashboard :
    SERVER_HOST=http://localhost:2002
    CLOUD_NAME=elkommerce
    UI_HOST=http://localhost:2002
    PORT=3000
#5 setup env variables for interface : 
    PORT=2002
    HOST=http://localhost:2002
    SECRET_KEY=fzq8f48fz8f4qzz67zq
#4 npm run dev & npm run build
#5 replcae npm run dev with npm start