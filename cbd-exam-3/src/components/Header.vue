<template>
<header class="app-header">
    <nav class="app-header-nav">
        <ul class="app-header-nav__list">
            <li class="app-header-nav__item">
                <a href="" class="app-header-nav__link">
                    Home
                </a>
            </li>
            <li class="app-header-nav__item">
                <a href="" class="app-header-nav__link">
                    Products
                </a>
            </li>
            <li class="app-header-nav__item">
                <a href="" class="app-header-nav__link">
                    Faqs
                </a>
            </li>
            <li class="app-header-nav__item">
                <a href="" class="app-header-nav__link">
                    Contact us
                </a>
            </li>
        </ul>
    </nav>
    <div class="app-header-logo">
        CBD
    </div>
    <div class="app-header-tools">
        <div class="app-header-tools__login
        app-header-tools--border">
            <a href="#" class="app-header-tools__link">
                Login
            </a>
        </div>
        <div class="app-header-tools__search
        app-header-tools--border">
            <a href="#" class="app-header-tools__link">
                Search
            </a>
        </div>
        <div class="app-header-tools__cart
        app-header-tools--border">
        <a href="#" class="app-header-tools__link">
            Cart(0)
        </a>
        </div>
    </div>
</header>
</template>

<script>

export default {
  name: 'Header',
};
</script>

<style lang="scss">

.app-header {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: rgba(255,255,255,0.5) 1px solid;
    height: 80px;
    z-index: 10;
    position: relative;
}

.app-header-nav {
    display: flex;
    align-items: center;

    @media screen and (max-width: 960px) {
        display: none;
    }
}

.app-header-nav__list {
    display: flex;
    gap: 45px;
    padding-left: 60px;
    align-items: center;
}

.app-header-nav__item {
    @include font('oswaldregular', 400, 16px, 1px, $white, uppercase);
}

.app-header-logo {
    text-align: center;
    align-self: center;
    @include font('oswaldregular', 400, 30px, null, $white, uppercase);
}
.app-header-tools {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &--border {
        padding: 0 35px;
        border-left: rgba(255,255,255,0.5) 1px solid;;
        display: flex;
        align-items: center;
        height: 100%;
        @include font('oswaldregular', 400, 16px, 1px, $white, uppercase);
    }

    &__login {
        padding: 0 35px;
    }
    &__search {
        padding: 0 35px;
    }
    &__cart {
        padding: 0 35px;
    }
}
</style>
