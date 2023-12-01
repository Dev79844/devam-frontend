build:
	docker build -t client . && docker run -dp 5173:80 client