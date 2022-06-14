describe("The Home Page", () => {
    it("successfully loads", () => {
        cy.visit("https://madss-test.apps.madss2-dev.openshift.madss-aws.com/");
    });
});
