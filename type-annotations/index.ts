let message: string = "Hello TypeScript!";

let age: number = 22;
let name: string = "John";
let isAdult: boolean = true;

const colors: string[] = ["red", "green", "blue"];
const docIds: number[] = [100, 200, 300];

// errors:
// colors.push(255);
// docIds.push("004")

const userInfo: { userName: string; followersCount: number } = {
  userName: "Maria",
  followersCount: 20000,
};

userInfo.followersCount = "5000";
userInfo.id = 77;
