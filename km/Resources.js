import KMG from "./kmg.js";
import Texture from "./Texture.js";

export default  class Resources 
{
    constructor ( list ) 
    {
        this.list = list;
        this.listLoaded = 0;
        this.resourcesTypes = {
            image: ['jpg', 'png', 'bmp', 'gif'],
            audio: ['wav', 'mp3', 'ogg'],
            video: ['mp4', 'mpg', 'avi', 'mov'],
            json: ['json']
        }

        this.onComplete = {
            list: [],
            add: function ( fn ) { 
                this.list.push(fn) 
            }
            
        };

        this.load();
    }

    load () 
    {
        const listLenght = Object.keys( this.list ).length;
        let item = null;
        let resourceItem = null;

        for ( const i in this.list ) 
        {
            item = this.list[i];

            if ( this.typeResource(item) === 'image' ) 
                resourceItem = new Texture(item);

            resourceItem.onload = (e) => 
            {
                const resource = e.target;
                const source   = resource.src;

                this[i] = { get data() { return new Texture(this.source)}, source: source };

                this.listLoaded++;

                if ( this.listLoaded == listLenght ) 
                    this.loadedResources();
                    
            }
        }
    }

    loadedResources () 
    {
        for ( const i in this.onComplete.list ) 
            this.onComplete.list[i]();
    }

    extensionResource (source) 
    {
        if ( typeof source === 'string' )
        {
            // search for file extension: period, 3-4 chars, then ?, # or EOL
            const result = (/\.(\w{3,4})(?:$|\?|#)/i).exec(source);

            if (result)
                return result[1].toLowerCase();

            return false;
        }
    }

    typeResource (source) 
    {
        const extension = this.extensionResource(source);
        let type = null;

        for ( const i in this.resourcesTypes ) 
        {
            const typeList = this.resourcesTypes[i];
            type = i;

            if (typeList.find( value => value == extension ) ) 
                break;
        }

        return type;
    }
}