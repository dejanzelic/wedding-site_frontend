<template>
  <div>
    <section class="intro" style="background-size: cover">
      <b-container>
        <b-row class="d-flex justify-content-center align-items-center">
          <b-col col md="12" class="text-center">
            <h1>
              <img src="@/assets/images/rsvp.png" id="rsvp" />
              <div id="subtext" v-html='$t("rsvp-fallback", { "email": $appConfig.CONTACTEMAIL})'>
              </div>
            </h1>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "InviteSearch",
  methods: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#hero-text {
  font-size: calc(4.575rem + 3.9vw);
  font-family: "Antic Didone", serif;
}
#hero-and {
  font-size: calc(1.575rem + 3.9vw);
  font-style: italic;
}
.intro {
  padding-top: 100px;
  padding-bottom: 80px;
}
#url {
  max-width: 800px;
  margin: auto;
}
#url .input-group-prepend .input-group-text {
  background: initial;
  border: none;
  padding-right: 5px;
}
#subtext {
  font-size: 1.75rem;
  padding-bottom: 2em;
}
#rsvp {
  width: 100%;
  padding-bottom: 2em;
}
#inviteCode {
}
.input-group-lg > .form-control,
.input-group-lg > .custom-select,
.input-group-lg > .input-group-prepend > .input-group-text,
.input-group-lg > .input-group-append > .input-group-text,
.input-group-lg > .input-group-prepend > .btn,
.input-group-lg > .input-group-append > .btn {
  font-size: 2.25rem;
}
@media only screen and (max-width: 900px) {
  .input-group-lg > .form-control,
  .input-group-lg > .custom-select,
  .input-group-lg > .input-group-prepend > .input-group-text,
  .input-group-lg > .input-group-append > .input-group-text,
  .input-group-lg > .input-group-prepend > .btn,
  .input-group-lg > .input-group-append > .btn {
    font-size: 1.75rem;
  }
  #subtext {
    font-size: 1.5rem;
  }
}
@media only screen and (max-width: 770px) {
  .input-group-lg > .form-control,
  .input-group-lg > .custom-select,
  .input-group-lg > .input-group-prepend > .input-group-text,
  .input-group-lg > .input-group-append > .input-group-text,
  .input-group-lg > .input-group-prepend > .btn,
  .input-group-lg > .input-group-append > .btn {
    font-size: 1.25rem;
  }
  #subtext {
    font-size: 1.25rem;
  }
}
@media only screen and (max-width: 500px) {
  .input-group-lg > .form-control,
  .input-group-lg > .custom-select,
  .input-group-lg > .input-group-prepend > .input-group-text,
  .input-group-lg > .input-group-append > .input-group-text,
  .input-group-lg > .input-group-prepend > .btn,
  .input-group-lg > .input-group-append > .btn {
    font-size: 1rem;
  }
  #subtext {
    font-size: 1rem;
  }
}
@media only screen and (max-width: 400px) {
  .input-group-lg > .form-control,
  .input-group-lg > .custom-select,
  .input-group-lg > .input-group-prepend > .input-group-text,
  .input-group-lg > .input-group-append > .input-group-text,
  .input-group-lg > .input-group-prepend > .btn,
  .input-group-lg > .input-group-append > .btn {
    font-size: 0.75rem;
    padding: 0.5rem 0.5rem;
  }
  #subtext {
    font-size: 0.75rem;
  }
}
</style>
