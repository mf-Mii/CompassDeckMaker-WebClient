import "../data/AllCards";
import AllCards from "../data/AllCards";
import {CardType} from "../model/CardTypes";
import {User} from "../model/User";
export class CardManager {
    /**
     * カードIDからカード情報を取得
     * @param cardId カードID
     * @returns カード情報 CardType.Common | null
     */
    public static get_cardInfo(cardId: number): CardType.Common | null {
        AllCards.forEach(card => {
            if (card.ID == cardId) {
                return card;
            }
        });
        return null;
    }

    static get_allCards(): CardType.Common[] {
        return AllCards;
    }

    static get_all_as_userCards(user: User | null): User.CardStatus[] {
        const userCards_result: User.CardStatus[] = [];
        AllCards.forEach(card => {
            userCards_result.push(new User.CardStatus(card, null, 0, 0, 0));
        });
        if (user !== null) {
            user.cardStatus.forEach(card => {
                userCards_result.forEach(userCard => {
                    if (userCard.card.ID == card.card.ID) {
                        userCard.memo = card.memo;
                        userCard.limitBreak = card.limitBreak;
                        userCard.count = card.count;
                        userCard.level = card.level;
                    }
                });
            });
        }
        return userCards_result;
    }
}
export default CardManager;
