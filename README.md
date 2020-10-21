# READ ME

# SUSHI GALLERY
A website I made to showcase my parent's restaurant, Sushi Gallery.
https://lukechang24.github.io/menu

# LANGUAGES USED
Javascript, CSS, HTML, ReactJs, Firebase(firestore, storage)

# DESCRIPTION
You can view the menu, which are seperated by tabs for rolls, sides, sushi, combinations, others, and beverages. You can also view the about section, which gives a brief history about the restaurant. Finally, there is a delivery section, where users can order delivery through grubhub, postmates, or ubereat links. These sections are all accessible through the navbar, which also have links for Sushi Gallery Yelp and Instagram, along with the location, phone number, and hours.

# PROBLEMS I ENCOUNTERED
One of the main problems I encountered was sustainability for the website in the future. My plan is to give this website to my parents, but if something were to change in the menu, my parents (who have no experience with code) would be unable to dive into the code and change it themselves. To remedy this, I used a npm package called tabletop.js, which allows me to record the menu items into google sheets, which then sends an object to my website for it to use. That way, to change the menu, whether it be the price, image, or description for the item, all they have to do is change it in the google sheets, and the information on my website would also change.
