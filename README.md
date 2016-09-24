# Waiter

A simple page pre-loader built using vanilla JS and CSS3. Please check the [demo](http://prideparrot.com/demos/waiter/index.html)!

## How to use

Just 2 steps!

1) Include the *waiter.css* file in the &lt;head&gt;

```html
<link rel="stylesheet" href="waiter.css>
```

2) Include the *waiter.js* file as the first child of the &lt;body&gt;

```html
<body>
    <script src="waiter.js"></script>
    [...other content]
</body>
```

## Options and Customization 

`manual` - Boolean, default `false`. When supplied `true`, removing the waiter has to be manually called by `window.waitOver()`.

You can pass this option as an attribute in the &lt;script&gt; tag.

```html
<script src="waiter.js" data-manual="true"></script>
```

You can change the base64 logo image and customize the background color of the waiter and progress bar by modifying the below variables in *waiter.scss* file.

`$logo` - base64 string of the logo image. You can create base64 string of your JPG, PNG logo image online using this [tool](https://www.base64-image.de/).
`$bgColor` - Waiter background color
`$progressBarColor` - Progress bar color

### Changing Animation

As default when the wait is over the waiter slides up. You can change the animation by overriding the `anime` and `trigger` CSS classes.

Below are couple of different animations you can apply.

#### Fade

```css
&.anime {
    transition: opacity 0.5s;
    
    &.trigger {
        opacity: 0;
    }
}
```

#### Vapour

```css
&.anime {
    transition: all .5s ease-in-out;
    
    &.trigger {
        transform: scale(2);
        opacity: 0;
    }
}
```

If you are not happy with any of these you can apply your own!