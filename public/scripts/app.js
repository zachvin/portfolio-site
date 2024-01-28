import * as fs from "node:fs"
import * as jsdom from "node:jsdom"
import * as jquery from "node:jquery"

const dom = new jsdom.JSDOM("");

fs.readFile("../json/project-titles.json", "utf-8", (err, data) => {
    if (err) throw (err);

    const titles = JSON.parse(data)["projects"];
    for (const title in titles) {
        jquery(".software").append('<a class="slide-in-down" href="' + title.path + '">' + title.desc + '</a>')
    }
});