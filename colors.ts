class Log {
    okay(content:any) {
        console.log('\x1b[32m',content);
    }
    error(content:any){
        console.log("\x1b[31m",content);
    }
    warn(content:any){
        console.log('\x1b[33m',content);
    }
    blue(content:any){
        console.log('\x1b[34m',content)
    }
    mag(content:any){
        console.log('\x1b[35m',content)
    }
    cyan(content:any){
        console.log('\x1b[36m',content);
    }
}
export const log = new Log();
