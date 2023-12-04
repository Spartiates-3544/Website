<script>
    import YearNav from '../../Components/YearNav.svelte';

    let documentName = 'Lorem Ipsum';
    let comment = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.';
    let uploadDate = '2018-11-16';
    let fileSize = '35kb'
</script>

<style>
    main{
        margin-top: 100px;
        display: grid;
        place-content: center;
    }

    #mainContainer{
        width: 90vw;
        height: calc(100vh - 200px);
        display: grid;
        grid-template-columns: 20vw 50vw 20vw;
    }

    .title{
        margin-bottom: 30px;
        color: #ffcc01;
        font-size: 120%;
    }

    #itemList{
        text-decoration: none;
        height: 55vh;
    }

    li{
        list-style-type: none;
        opacity: 20%;
        cursor: pointer;
        transition: 100ms;
    }

    li:hover{
        opacity: 30%;
    }

    #yearNav{
        position: relative;
    }

    #yearNavContainer{
        height: 10vh;
        position: absolute;
        bottom: 0;
    }

    #file{
        width: 100%;
        height: 100%;
        display: grid;
        place-content: center;
    }

    #file p {
        opacity: 30%;
    }

    #docInfo{
        padding-left: 55px;
    }

    #comment, #metaData, #download{
        opacity: 20%;
        margin-bottom: 15px;
        transition: 100ms;
    }

    #download{
        cursor: pointer;
    }

    #download:hover{
        opacity: 30%;
    }
</style>

<main>
    <section id="mainContainer">
        <section id="navBarContainer">
            <p class="title">Documents</p>
            <ul id="itemList">
                <li>Folder name</li>
                <li>Folder name</li>
                <li>Folder name</li>
                <li>Folder name</li>
                <li>Folder name</li>
            </ul>
            <section id="yearNavContainer">
                <div id="yearNav">
                    <YearNav/>
                </div>
            </section>
        </section>
        <section id="file">
            <p>No file is open</p>
        </section>
        <section id="docInfo">
            <p class="title">{documentName}</p>
            <p id="comment">Comment: {comment}</p>
            <div id="metaData">
                <p id="fileSize">Size: {fileSize}</p>
                <p id="uploadDate">Upload date: {uploadDate}</p>
            </div>
            <a id="download">Download</a>
        </section>
    </section>
</main>