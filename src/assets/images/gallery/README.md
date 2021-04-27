Any files in here will be served as is.

It is best to compress and resize the images before serving the
contents. 

To compress, run the following command in this directory:

```
docker run -it --rm \
    -v $(pwd)/:/var/workdir/ \
    kolyadin/pngquant find . -maxdepth 1 -type f -name "*.png" -exec pngquant --verbose -f --ext .png --quality 80-90 {} \;
```

Once resized, we can use the following command to generate thumbnails:
```
docker run -v $(pwd)/:/imgs --entrypoint=mogrify dpokidov/imagemagick -resize 500x -quality 100 -path /imgs/thumbnails/ /imgs/\*.png
```

Curretnly, the app only supports PNG images. 

TODO: Add support of additional file types