<template>
    <div class="theBigBox">
        <p>
            {{ dataSource }}
        </p>
        <div id="g-pointer-1"></div>
        <div id="g-pointer-2"></div>
    </div>
</template>
  
<script setup>
import useIndexData from './composables/useIndexData'

const {
    dataSource
} = useIndexData()

onMounted(() => {
    const body = document.querySelector(".theBigBox");
    const element = document.getElementById("g-pointer-1");
    const element2 = document.getElementById("g-pointer-2");
    const halfAlementWidth = element.offsetWidth / 2;
    const halfAlementWidth2 = element2.offsetWidth / 2;

    function setPosition(x, y) {
        element.style.transform = `translate(${x - halfAlementWidth}px, ${y - halfAlementWidth}px)`; element2.style.transform = `translate(${x - halfAlementWidth2}px, ${y - halfAlementWidth2}px)`;
    }

    body.addEventListener('mousemove', (e) => {
        window.requestAnimationFrame(function () {
            setPosition(e.clientX, e.clientY);
        });
    });
});


</script>
  
<style scoped>
.theBigBox {
    cursor: none;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: pink;
    /* pointer-events: none; */

    p {
        position: relative;
        margin: auto;
        color: #fff;
        /* z-index: 2; */
        font-size: 64px;
    }

    #g-pointer-1,
    #g-pointer-2 {
        position: absolute;
        top: 0;
        left: 0;
        width: 12px;
        height: 12px;
        background: #999;
        border-radius: 50%;
        background-color: #fff;
        mix-blend-mode: exclusion;
        z-index: 1;
    }

    #g-pointer-2 {
        width: 42px;
        height: 42px;
        background: #222;
        transition: .2s ease-out;
    }
}
</style>
  