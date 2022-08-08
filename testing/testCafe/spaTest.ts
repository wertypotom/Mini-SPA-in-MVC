import { Selector } from 'testcafe';

const userInput = Selector('.userItems-input'); 

fixture`Getting Started`
    .page`http://192.168.1.153:8080/dist/`;


test('Testing input', async t => {
    // разными эвейтами отделяем логические моменты одного теста , или можно все в один эвейт затолкать ?
    await t
        .typeText(userInput, 'Mike')
        .expect(userInput.value).eql('Mike')
        .expect(Selector('.userItems-list li').count).eql(2)

    await t
        .typeText(userInput, 'r', {
            caretPos: 2
        })
        .expect(Selector('.userItems-list li').count).eql(0)    
})

test('Test elements selection: Click same element twice', async t => {
    await t
        .typeText(userInput, 'Mike')
        .click(Selector('.userItems-list li').nth(0))
        .expect(Selector('.userItemContainer').exists)
        .ok()
        .expect(Selector('.userItemContainer li').nth(1).textContent).contains('SurMike')
        .click(Selector('.userItems-list li').nth(0))
        .expect(Selector('.userItemContainer').exists)
        .notOk()
})

test('Test elements selection: Click another element', async t => {
    await t
        .typeText(userInput, 'Mike')
        .click(Selector('.userItems-list li').nth(0))
        .expect(Selector('.userItemContainer').exists)
        .ok()
        .expect(Selector('.userItemContainer li').nth(1).textContent).contains('SurMike')
        .click(Selector('.userItems-list li').nth(1))
        .expect(Selector('.userItemContainer li').nth(1).textContent).contains('Klarkson')
})