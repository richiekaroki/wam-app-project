<template>
  <div class="about-page">
    <header class="header">
      <h1>About Me</h1>
    </header>
    <section class="content">
      <p>Welcome to my portfolio! I am dedicated to delivering the best services to my clients.</p>
      <p>I am an experienced professional who is passionate about my work.</p>
      <p>I believe in innovation, quality, and customer satisfaction.</p>
    </section>
    <section class="images">
      <img src="../assets/images/work-1.png" alt="Image 1" />
      <img src="../assets/images/work-2.png" alt="Image 2" />
    </section>
    <section class="story">
      <h2>My Story</h2>
      <p>
        I was born and raised in a small town where I developed a love for technology at an early
        age. My academic journey began at XYZ University, where I pursued a degree in Computer
        Science. During my time at university, I was involved in various projects that honed my
        skills and prepared me for the professional world.
      </p>
      <p>
        After graduation, I worked at several companies, gaining valuable experience in different
        areas of software development. My passion for learning and innovation has driven me to
        continuously improve my skills and stay updated with the latest industry trends.
      </p>
      <p>
        Today, I am proud to offer my expertise to clients, helping them achieve their goals through
        high-quality and innovative solutions.
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style scoped>
.about-page {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.content {
  margin-bottom: 40px;
}
</style>
