---
title: 'Quick Tip: Handling multiple anchor links in cards better.'
slug: quick-tip-handling-anchor-links-in-cards
date: 2019-08-12 23:00:00 +0000
description: this will be a description
tags:
- css
- html

---
# Quick Tip: Single Anchor Tag which Spans Full Element
I was recently looking for an implementation of making anchor links span the whole of their container, without the need to recreate 3/4 anchor links each time I wanted a child element to be linked. You can see the desired result in the CodePen embedded below, or available at https://codepen.io/jackabox_alt/pen/xxKZdRo.

<iframe height="546" style="width: 100%;" scrolling="no" title="Having an anchor spread across container, except for other links" src="//codepen.io/jackabox_alt/embed/xxKZdRo/?height=546&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>
This is a relatively simple example and will utilise a before element on the anchor link with class `card__link`, this before element will span the whole of the `.card` container and allow for it to be clickable. 

If we have other links in the card, for example to go to categories, we can still ensure these are clickable with a z-index tweak. If we make all `<a>` tags that do not have the class `.card__link` be brought above the before element and still clickable through the content.

## HTML


```html
<article class="card">
  <div class="half">
    <h2><a href="#" class="card__link">This is a title with an anchor link</a></h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto saepe nam fugit ullam aperiam est impedit quis laboriosam dolorum numquam?</p>
      
    <p>
      <a href="#" class="cat1">Category</a>
      <a href="#" class="cat1">Category</a>
      <a href="#" class="cat1">Category</a>
    </p>
  </div>
    
  <div class="half image">
    <img src="https://picsum.photos/500" alt="">
  </div>
</article>
```


## CSS


```css
.card {
  position: relative;
}

.card a:not(.card__link) {
  position: relative;
  z-index: 2;
}

.card__link::before {
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  overflow: hidden;
  position: absolute;

  white-space: nowrap;
  z-index: 1;
}
```