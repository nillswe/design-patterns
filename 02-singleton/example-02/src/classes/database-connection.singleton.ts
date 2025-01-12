import {FakeDatabase} from '../libs/fake-database'

export class DatabaseConnection {
  private static _instance: DatabaseConnection

  private constructor() {}

  public static get instance() {
    if (!DatabaseConnection._instance) {
      DatabaseConnection._instance = new DatabaseConnection()
    }
    return DatabaseConnection._instance
  }

  public connect() {
    FakeDatabase.connect('db')
  }
}
