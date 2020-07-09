<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left" @click.prevent="$emit('click')">
          <a href="#">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{date | date('datetime')}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id='dropdown' class='dropdown-content'>
            <li>
              <router-link href="#" class="black-text" to="/profile">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null
  }),
  // mounted - прогружается после построение ДОМ элементов, необходимо для некоторых объектов
  mounted () {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    // М - глобальный объект Materialize
    // eslint-disable-next-line no-undef
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true
    })
  },
  methods: {
    logout () {
      console.log('LOGOUT!')
      this.$router.push('/login?message=logout')
    }
  },
  beforeDestroy () {
    console.log('beforeDestroy --->>')
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      console.log('>> this.dropdown.destroy')
      // eslint-disable-next-line no-unused-expressions
      this.dropdown.destroy
    }
  }
}
</script>
