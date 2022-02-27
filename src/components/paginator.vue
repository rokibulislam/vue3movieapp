<template>
    <div>
        <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center">
                <li v-bind:class="[currentpage === 1 ? 'page-item disabled' : 'page-item']">
                    <a href="" class="page-link" @click.prevent="onPageChange(currentpage - 1 )"> Previous </a>
                </li>  

                <li v-for="page in pages" :key=page v-bind:class="[page === currentpage ? 'page-item active' : 'page-item']">
                    <a href="" class="page-link" @click.prevent="onPageChange(page)"> {{page}} </a>
                </li>

                <li v-bind:class="[currentpage === page_size ? 'page-item disabled' : 'page-item']">
                    <a href="" class="page-link" @click.prevent="onPageChange(currentpage + 1)"> Next </a>
                </li>    
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    props: ['items','currentpage','page_size'],
    date() {
        return {
            length: 0
        }
    },
    computed: {
        pages: function() {
            let current = this.currentpage;
            let last = this.page_size;
            let delta = 3;
            let left = current - delta;
            let right = current + delta + 1;
            let range = [];
            let pages = [];
            let l;
            for (var i = 1; i <= last; i++) {
                if (i === 1 || i === last || (i >= left && i < right)) {
                    range.push(i);
                }
            }
            range.forEach(function (i) {
                if (l) {
                    if (i - l === 2) {
                        pages.push(l + 1);
                    } else if (i - l !== 1) {
                        pages.push('...');
                    }
                }
                pages.push(i);
                l = i;
            });
        
            return pages
        },
    },
    methods: { 
        onPageChange:  function( page) {
            console.log(page);
            this.$emit('pageChanged', page);
        }
    }
}
</script>

<style scoped>

    .pagination {
        display: flex;
        list-style: none;
        justify-content: center;
        flex-wrap: wrap;
    }

   .page-link {
        position: relative;
        display: block;
        padding: 0.6rem 1rem;
        line-height: 1.3rem;
        color: #007bff;
        background-color: #fff;
        border: 1px solid #dee2e6;
        text-decoration: none;
    }

    .page-item.active .page-link {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
    }

    .page-item.disabled .page-link {
        color: #6c757d;
        pointer-events: none;
        cursor: auto;
        background-color: #fff;
        border-color: #dee2e6;
    }

</style>