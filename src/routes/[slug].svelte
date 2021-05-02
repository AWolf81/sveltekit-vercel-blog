<script context="module">
    export async function load({ fetch, page }) {
        let article;

        try {
        // here we are gonna fetch the single article by id
            article = await fetch(`https://dev.to/api/articles/${page.params.slug}`);
            article = await article.json();
        } catch (e) {
            console.log(e);
        }
        return {
            props: {
                article
            }
        };
    }
</script>

<script>
    export let article;
</script>

<div class="articleContainer">
    <div class="article">
        <h1>{article.title}</h1>
        <!-- you can "parse" HTML with svelte like that
            https://svelte.dev/docs#html -->
        {@html article.body_html}
    </div>
</div>