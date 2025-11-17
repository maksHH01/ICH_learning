export namespace UserManagement {
  export namespace Admin {
    export class AdminUser {
      constructor(
        public name: string,
        public email: string,
        public isSuperAdmin: boolean
      ) {}

      setSuperAdmin(status: boolean) {
        this.isSuperAdmin = status;
      }

      getInfo() {
        return `${this.name} (${this.email}) — SuperAdmin: ${this.isSuperAdmin}`;
      }
    }
  }
}
