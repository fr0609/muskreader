
import {Http} from "@angular/http";
import {Injectable} from "@angular/core";

/**
 * Created by fr0609 on 2/14/17.
 */

export class FeedItem {
    thumbnail: string;
    url: string;
    title: string;
    permalink: string;

    constructor(description: string, url: string, title: string, permalink: string ) {
        this.thumbnail = description;
        this.url = url;
        this.title = title;
        this.permalink = permalink;
    }
}
@Injectable()
export class ElonData {
    constructor(public http : Http){

    }
    public load(): any {
        return this.http.get('https://www.reddit.com/r/elonmusk.json')
            .map(this.processData);
    }


    processData( data : any) {
        let articles = [];
        data = data.json();
        data.data.children.forEach(( child : any ) => {
            let newFeedItem = new FeedItem(child.data.thumbnail, child.data.url, child.data.title, child.permalink);
            articles.push(newFeedItem);
        });
        return articles;
    }

}