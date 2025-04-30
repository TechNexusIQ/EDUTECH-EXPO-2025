fetch('./Blogs/blogs.json')
  .then(response => response.json())
  .then(data => {
    const sortedBlogs = data.sort((a, b) => new Date(b.date) - new Date(a.date));
    const latestBlogs = sortedBlogs.slice(0, 3);
    const container = document.getElementById('blogContainer');
    if (!container) return;

    latestBlogs.forEach(blog => {
      const excerpt = blog.content.split(/\s+/).slice(0, 25).join(' ') + '...';

      const blogCard = document.createElement('div');
      blogCard.classList.add('blog-card');

      blogCard.innerHTML = `
        <div class="blog-date">${new Date(blog.date).toDateString()}</div>
        <div class="blog-title">${blog.title}</div>
        <div class="blog-excerpt">${excerpt}</div>
        <a class="read-more-btn" href="./Blogs/blog.html?id=${blog.id}">Read More</a>
      `;

      container.appendChild(blogCard);
    });
  })
  .catch(error => {
    console.error('Error loading blogs on homepage:', error);
  });
