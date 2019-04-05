# Eulr

[Live Site](https://eulr.herokuapp.com)

## Background

Eulr is a single-page blogging platform based off of Tumblr. Users can make text posts, share quotes and photos, upload videos, and much more. 

## Screenshots

![](https://66.media.tumblr.com/a1e5a5992a12d6e949d5f903850de3fd/tumblr_pphqfeCzGO1wejsx8o1_540.png)

![](https://66.media.tumblr.com/a1e5a5992a12d6e949d5f903850de3fd/tumblr_pphqfeCzGO1wejsx8o1_540.png)

## Technologies

* React/Redux frontend
* Ruby on Rails backend
* PostgreSQL database
* AWS S3 file hosting

## Code Highlights

* Editing a post causes the post itself to smoothly transform into the post editing form while the rest of the screen grays out and becomes uninteractable. This is achieved by wrapping each post in a container element, which conditionally renders either the post or the post edit form, depending on the redux store state.

![](https://66.media.tumblr.com/d390361351787cd6d3eda5fc94017740/tumblr_ppgunpJpdf1wejsx8o2_540.gif)

* The seven different types of posts use only three distinct form components: text, link, and media. Using a 

## Feature Highlights

* Upload images, songs, and videos from either a file select or a url

![](https://66.media.tumblr.com/ad832eefa3d9bf7851f6b1d075766435/tumblr_pphr6jbORR1wejsx8o1_540.png)
![](https://66.media.tumblr.com/ec5e22bb0fa77983cd364961435af1e7/tumblr_pphr6jbORR1wejsx8o2_540.png)



