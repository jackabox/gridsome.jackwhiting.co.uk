<template>
  <Layout>
    <page-header title="Contact" />

    <div class="container">
      <div class="row flex flex-wrap justify-between">
        <div class="column w-12/12 md:w-4/12">
          <slide-in :reverse="true">
            <h4>Details</h4>
            <p class="mb-6">
              <span class="block text-sm uppercase mb-1">Availability</span>
              <span>Accepting New Projects</span>
            </p>

            <p class="mb-6">
              <span class="block text-sm uppercase mb-1">Email</span>
              <a
                href="mailto:hi@jackwhiting.co.uk"
                title="Email Jack Whiting"
                class="link"
              >hi@jackwhiting.co.uk</a>
            </p>

            <p class="mb-6">
              <span class="block text-sm uppercase mb-1">Location</span>
              <span>Nottingham, United Kingdom</span>
            </p>
          </slide-in>
        </div>

        <form
          name="contact"
          class="column w-12/12 md:w-7/12"
          method="POST"
          netlify-honeypot="dumbo-field"
          data-netlify="true"
        >
          <slide-in :reverse="true">
            <h4>Send a Message</h4>
            <p class="hidden">
              <label>
                Don’t fill this out if you're human:
                <input name="dumbo-field" />
              </label>
            </p>

            <p>
              <label>
                <span class="block text-sm uppercase mb-3">Your Name:</span>
                <input type="text" name="name" class="border" />
              </label>
            </p>
            <p>
              <label>
                <span class="block text-sm uppercase mb-3">Your Email:</span>
                <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                <span class="block text-sm uppercase mb-3">Budget:</span>
                <div class="select">
                  <select name="budget">
                    <option value>Unsure/Don't have one</option>
                    <option value="£0 - £3,000">£0 - £3,000</option>
                    <option value="£3,000 - £6,000">£3,000 - £6,000</option>
                    <option value="£6,000 - £10,000">£6,000 - £10,000</option>
                    <option value="£10,000+">£10,000+</option>
                  </select>
                </div>
              </label>
            </p>
            <p>
              <label>
                <span class="block text-sm uppercase mb-3">Project Details:</span>
                <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit" class="btn">Send</button>
            </p>
          </slide-in>
        </form>
      </div>
    </div>
  </Layout>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import SlideIn from '~/components/Animation/SlideIn'

export default {
  components: {
    PageHeader,
    SlideIn
  },

  metaInfo: {
    title: 'Contact Me',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Want to get in touch? Use the contact form below to send me a message.'
      }
    ]
  }
}
</script>

<style lang="postcss" scoped>
label {
  display: block;
}

textarea {
  min-height: 220px;
}

input,
textarea,
.select {
  padding: 15px;
  border: 1px solid #dedede;
  display: block;
  width: 100%;
  background: white;
  font-size: 0.9rem;
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

select {
  border: 0;
  width: 100%;
  display: block;
  padding: 10px 16px;
  background: transparent;
}
</style>