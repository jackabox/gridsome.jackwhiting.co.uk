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

        <div class="column w-12/12 md:w-7/12">
          <slide-in :reverse="true">
            <h4>Send a Message</h4>

            <div v-if="success">
              <p>Thank you for your message, I'll be in touch as soon as possible.</p>
            </div>

            <form
              v-else
              name="contact"
              method="POST"
              v-on:submit.prevent="handleSubmit"
              netlify-honeypot="dumbo-field"
              data-netlify="true"
            >
              <p hidden>
                <label>
                  Don’t fill this out if you're human:
                  <input name="dumbo-field" />
                </label>
              </p>

              <p>
                <label>
                  <span class="block text-sm uppercase mb-3">Your Name:</span>
                  <input type="text" name="name" class="border" v-model="formData.name" required />
                </label>
              </p>
              <p>
                <label>
                  <span class="block text-sm uppercase mb-3">Your Email:</span>
                  <input type="email" name="email" v-model="formData.email" required />
                </label>
              </p>
              <p>
                <label>
                  <span class="block text-sm uppercase mb-3">Budget:</span>
                  <div class="select">
                    <select name="budget" v-model="formData.budget">
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
                  <textarea
                    name="message"
                    v-model="formData.message"
                    required
                    placeholder="Tell me a little about your project"
                  ></textarea>
                </label>
              </p>
              <p>
                <button type="submit" class="btn">Send</button>
              </p>
            </form>
          </slide-in>
        </div>
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

  data() {
    return {
      success: false,
      formData: {}
    }
  },

  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
        )
        .join('&')
    },

    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData
        })
      })
        .then(() => (this.success = true))
        .catch(error => alert(error))
    }
  },

  metaInfo: {
    title: 'Contact |',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'I am always happy to hear new about new enquiries and opportunities. Get in touch to discuss your next project.'
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