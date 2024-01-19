export class Tag{
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'darkred');
    static readonly PYTHON = new Tag('Python', 'green');
    static readonly CSHARP = new Tag('C#', 'green');
    static readonly JAVA = new Tag('Java', 'purple');
    static readonly NODEJS = new Tag('Node.JS', 'brown');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'orange');

    private constructor(private readonly key: string, public readonly color:string){


    }

    toString(){
        return this.key;
    }
}