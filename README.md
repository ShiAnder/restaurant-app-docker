# restaurant-app-docker
containerized using docker


# Run in root folder

npm install

# Go to restaurant-frontend

cd restaurant-frontend

npm install

#Build Docker Image


docker build -t restaurant-service .


#Run the Docker Container


docker run -d -p 3000:3000 --name restaurant-service --env-file .env restaurant-service
