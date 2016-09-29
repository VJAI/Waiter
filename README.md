# Waiter

The front-end code increases monumentally day-by-day. In enterprise apps, I see vendor JavaScript files spikes to MBs even after compression. Loading these huge files gives a very unpleasant experience for the end-user because they've to just stare the blank white screen for a while! Sometimes it's just difficult to cut down the size and in those cases it's better to provide a nice welcome screen to release the tension of the user.
 
Waiter is a simple pre-loading screen built with pure JS and CSS3. It don't have any dependency with 3rd party libraries. Waiter provides option to display your logo image with a nice fake progressbar that gives an illusion the page is loading soon!
 
Please check the [demo](http://prideparrot.com/demos/waiter/demo1.html)!

![Waiter](https://raw.githubusercontent.com/VJAI/Waiter/master/images/waiter.png)

## How to use

To use Waiter you've to follow the below steps!

1) You can either download the complete source code manually from Github and include in your project or you can install through npm as below,

```shell
npm install https://github.com/VJAI/Waiter.git --save
```

2) Move your application JS and CSS files to the end of &lt;body&gt;. Moving CSS files inside the &lt;body&gt; may question you whether it's right practice. It's perfectly OK to reference the CSS files inside the &lt;body&gt; but to pass the HTML5 validation please specify `property` attribute of the &lt;link&gt; element as `stylesheet`. If the CSS file size is small then it would be OK to reference in the &lt;head&gt; (for a slight duration the user may see the blank screen).

```html
...    
    <link rel="stylesheet" property="stylesheet" href="app.min.css" >
    <script src="app.min.js"></script>
</body>
```

3) Copy everything from *waiter.min.css* from *dist* and drop it inline with &lt;style&gt; element under &lt;head&gt;.

```html
<style>
    [content from waiter.css]
</style>
```

If you are using build tool like grunt or gulp you don't have to do this manually. There are plugins available like grunt-processhtml or gulp-processhtml that can copy JS or CSS files and make them inline in your HTML file at any place. We are already using similar mechanism in our repo to inline the Waiter CSS and JS files in the *index.html* file. We've used grunt-processhtml to achieve this. Please take a look at the *index.template.html* to understand what I'm talking about.

If you are not using any build tool like grunt or gulp then you've to do this manually.

4) Copy everything from *waiter.min.js* from *dist*  and drop it inline with &lt;script&gt; element and it should be the first child of the &lt;body&gt;.

```html
<body>
    <script>
        [content from waiter.js]
    </script>
    [...other content]
</body>
```

Again, if you are using grunt or gulp then you don't have to do this copy-paste manually!

Don't reference these files by `href` or `src` and that beats the purpose of Waiter!

## Options and Customization 

### Options

Waiter provides only one option to you and it's called `manual`. As default the pre-loading screen is removed in the `window.onload` event but if you want to take that control you've to pass this option as `true`. Note, you cannot directly pass this to Waiter and you've to set the `data-manual` attribute in the &lt;body&gt; element as `true` to do that!

```html
<body data-manual="true">
    ...
```

Later you can manually remove the Waiter by calling `window.waitOver()`.

### Customization

As default waiter uses a sample logo image. You can replace it with the base64 string of your own logo image. You can create base64 string of your JPG, PNG logo image online using this [tool](https://www.base64-image.de/). Other than the logo you can also customize the background-color of the screen and the progress-bar.

The best way to customize these things is by modifying the below SASS variables in waiter.scss and compiling it to CSS file. 

`$logo` - base64 string of the logo image. You can create base64 string of your JPG, PNG logo image online using this [tool](https://www.base64-image.de/).

`$bgColor` - Waiter background color

`$progressBarColor` - Progress bar color

If you are using build tool then compiling SCSS to CSS would be terribly easy. Else you can do it online using this [tool](http://beautifytools.com/scss-compiler.php).

I don't advice you to override the CSS styles but you could do that. The reason is we are using some formulas internally to create secondary colors from the passed colors and so it's good to override the SASS variables and compile it to CSS.

#### Changing Animation

As default when the wait is over the waiter slides up. You can change the animation by overriding the `waiter--anime` and `waiter--anime-trigger` CSS classes. You can either do it in your SASS or CSS file.

Below are couple of different animations you could try.

##### Fade 
[demo](http://prideparrot.com/demos/waiter/demo2.html)

```css
&.waiter--anime {
    transition: opacity 0.5s;
}   

&.waiter--anime-trigger {
    opacity: 0;
}
```

##### Vapour
[demo](http://prideparrot.com/demos/waiter/demo3.html)

```css
&.waiter--anime {
    transition: all .5s ease-in-out;
}   

&.waiter--anime-trigger {
    transform: scale(2);
    opacity: 0;
}
```

If you are not happy with the above animations you can roll your own :)

## Tested Browsers

- Chrome
- Safari
- IE11

Yet to test in IE10 and IE9 and fix if there issues. No plan for IE8!

## Development & Contribution

First you've to make sure Grunt CLI is installed globally `npm install -g grunt-cli` and then run `npm install` to install all the dependencies required by the project.

The following are the couple of grunt commands you should know.

`grunt` - Creates a server and launches the *index.html* page in the browser. Whenever you make any change to the JS or SCSS file, the page will be automatically refreshed with the changes.

`grunt build` - Copies the un-minified and minified JS and CSS files to the *dist* folder.

There are more improvements you can do to Waiter. How about making the screen content dynamic? Instead of always displaying the logo image and the progress bar you can also display some important information in the Waiter like events and other things. Feel free to fork and improve!

## Contact

For any queries please reach me through http://prideparrot.com/contact.