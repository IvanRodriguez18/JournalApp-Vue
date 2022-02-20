<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white">
            <img src="@/assets/daybook.png" alt="DayBook" 
            class="d-inline-block align-text-top mx-2" height="30">DayBook
        </a>
        <div class="d-flex">
            <button class="btn btn-light mx-2 btn-border-radius">
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
button{
    border-radius: 100%;
    width: 40px;
    height: 40px;
    &:hover{
        color: #1AB;
    }
}
</style>