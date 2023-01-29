
FROM node:18.12.0-alpine AS appbuild
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build



FROM python:3
WORKDIR /usr/src/app
COPY . ./
COPY --from=appbuild /usr/src/app/build ./build
RUN pip install -r requirements.txt
RUN python3 manage.py makemigrations
RUN python3 manage.py migrate   
