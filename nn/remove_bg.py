from PIL import Image, ImageOps

def invert(path,filename):
    im = Image.open(path+'/user_data/foreground' + filename)
    im_invert = ImageOps.invert(im)
    im_invert.save(path+'/user_data/processed/' + filename, quality=95)
    print('hi')