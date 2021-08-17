export default class Data {
	constructor(name){
		this.name = name

		console.log(this.name)
	}

	static async getRepos(url = null) {
		return await fetch(url)
	}

}