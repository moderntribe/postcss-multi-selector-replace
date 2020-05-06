# postcss-multi-selector-replace
This is a fork of postcss-selector-replace and is used on our projects at Modern Tribe.

# Example

__postcss.config.js__   

```
module.exports = {
  plugins: [
    require('postcss-selector-replace')({
      "before": ["[base]", "[test]"],
      "after": ["^", "~"]
    })
  ]
}
```

__before.css__   

```
[base]contentpage {
	background-color: red;
}
```

__after.css__   

```
^contentpage {
	background-color: red;
}
```
