<script lang="ts">
    import "../global.css";

    export let title: string;
    export let text: string;
    export let image_url: string = "https://via.placeholder.com/400";
    export let url: string;

</script>

<div class="project-card w-[400px] h-[400px] bg-white m-2 rounded-lg transition hover:scale-95">
    <img src={ image_url } alt="Project Image" class="object-cover w-full h-[200px] rounded-t-lg"/>
    <div class="project-card-body p-2">
        <div class="project-card-header">
            <h1 class="text-2xl font-bold text-black ">{title}</h1>
        </div>

        <div class="">
            <p class="text-black mt-2">{text}</p>
            {#if !(url === "!")}
                <p class="" style="color: rgb(56 189 248)"><a href={url} >Learn more</a></p>
            {/if}
        </div>
    </div>
</div>

<style lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>