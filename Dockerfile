FROM node:18.12.0-alpine
COPY package.json /code/package.json
COPY package-lock.json /code/package-lock.json
RUN [ "yarn", "install" ]
RUN [ "npm", "build" ]
#RUN [ "npm", "run", "build" ]

FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/

