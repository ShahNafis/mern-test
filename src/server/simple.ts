function myName(name:any) {
    const myName = name ?? 'defaultName'
    console.log(myName)
}

myName('bob')
myName(0)