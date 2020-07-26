<template>
  <div class="card">
    <div class="card-content">
      <p class="title">Fale conosco</p>
      <br />
      <section>
        <b-field label="Nome" labelPosition="on-border">
          <b-input v-model="form.name" maxlength="50"></b-input>
        </b-field>

        <b-field label="Telefone" labelPosition="on-border">
          <b-input type="phone" v-model="form.phone" maxlength="20"></b-input>
        </b-field>

        <b-field label="Email" labelPosition="on-border">
          <b-input type="email" v-model="form.email" maxlength="150"></b-input>
        </b-field>

        <b-field label="Mensagem" labelPosition="on-border">
          <b-input type="textarea" v-model="form.message" maxlength="300"></b-input>
        </b-field>

      </section>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <button class="button is-info">Enviar</button>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "TalkWithUs",
  data() {
    return {
      form: {
        name: undefined,
        phone: undefined,
        email: undefined,
        message: undefined,
      },
    };
  },
};
</script>

<style scoped>
    .field {
        margin: 0px;
    }
</style>