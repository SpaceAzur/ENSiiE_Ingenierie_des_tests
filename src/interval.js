class Interval {
    constructor(start, end) {
        this.start = start;
        this.end = end
    }

    // COMMAND CONSOLE FOR CODE COVERAGE "node_modules/.bin/jest --coverage"

    toString() {
        return "[" + this.start + "," + this.end + "]";
    }

    /**
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.overlaps(interval2) => true
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.overlaps(interval2) => false
     *
     * @param {Interval} interval
     * @returns {boolean}
     */
    overlaps(interval) {
        return this.end > interval.start && this.start < interval.end;
    }

    /**
     * Retourne true si cet interval contient le paramètre interval
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                  ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.includes(interval2) => true
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.includes(interval2) => false
     *
     * @param {Interval} interval
     * @returns {boolean}
     */
    includes(interval) {
        let res = Boolean;
        if(this.start <= interval.start && this.end >= interval.end){
            res = true;
        } else {
            res = false;
        }
        return res;
    };

    /**
     * Retourne l'union de deux intervals
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.union(interval2) =>        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.union(interval2) =>        ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
     *
     * @param {Interval} interval
     * @returns {Interval[]}
     */
    union(interval) {
        let tab_interval = [];
        let interFusion = new Interval();
        // 2 intervals sont dissociés => 
        if(this.end <= interval.start || this.start >= interval.end) {
            tab_interval.push(this);
            tab_interval.push(interval);
        // Exemple 1 (dans les 2 sens)
        } 
        else if(this.end > interval.start) {
            interFusion.start = this.start;
            interFusion.end = interval.end;
            tab_interval.push(interFusion);
        } 
        else if(interval.end > this.start) {
            interFusion.start = interval.start;
            interFusion.end = this.end;
            tab_interval.push(interFusion);
        }
        else if(this.start <= interval.start && this.end >= interval.end) {
            interFusion.start = this.start;
            interFusion.end = this.end;
        }
        else if(interval.start <= this.start && interval.end >= this.end) {
            interFusion.start = interval.start;
            interFusion.end = interval.end;
        }

        return tab_interval;
    };

    /**
     * Retourne l'intersection de deux intervals
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.intersection(interval2) =>                     ▒▒▒▒▒
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.intersection(interval2) => <tableau vide>
     *
     * @param {Interval} interval 
     * @returns {Interval|null}
     */
    intersection(interval) {
        let tab_intersec = [];
        let point = 0;
        // cas NO intersection
        if( (this.end-interval.start) < 0 || (interval.end-this.start) < 0 ) {
            return tab_intersec;
        }
        // cas où les 2 intervals ont un point en commun
        else if( (this.end-interval.start) === 0 ) {
            return point = interval.start;
        }
        else if( (this.start-interval.end) === 0 ) {
            return point = this.start;
        }
        // cas interection : THIS devant Interval
        else if( (this.end-interval.start) > 0 ) {
            return point = this.end-interval.start;
        } 
        // cas intersection : Interval devant THIS
        else if( (interval.start-this.end) > 0 ) { 
            return point = interval.end-this.start;
        }
    };

    /**
     * Retourne l'exclusion de deux intervals
     *
     * Exemple 1 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.exclusion(interval2) =>    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒     ▒▒▒▒▒▒▒▒
     *
     * Exemple 2 :
     *      interval1 =                          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval2 =                                                      ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
     *      interval1.exclusion(interval2) =>    ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
     *
     * @param {Interval} interval
     * @returns {Interval[]}
     */
    exclusion(interval) {
        let tab_exclu = [];
        const exclu1 = new Interval();
        const exclu2 = new Interval();
        if( (interval.start-this.end) >= 0 || (this.start-interval.end) >= 0 ) {
            tab_exclu.push(this);
            tab_exclu.push(interval);
            console.log(this); console.log(interval);
            console.log(tab_exclu);
            return tab_exclu;
        }
        else if( interval.start > this.end && interval.end > this.end && this.start < interval.start) {
            exclu1.start = this.start;
            exclu1.end = interval.start;
            exclu2.start = this.end;
            exclu2.end = interval.end;
            tab_exclu.push(exclu1);
            tab_exclu.push(exclu2);
            console.log(this); console.log(interval);
            console.log(tab_exclu);
            return tab_exclu;
        }
        else if( this.start > interval.start && this.start < interval.end && this.end > interval.end) {
            exclu1.start = interval.start;
            exclu1.end = this.start;
            exclu2.start = interval.end;
            exclu2.end = this.end;
            tab_exclu.push(exclu1);
            tab_exclu.push(exclu2);
            console.log(this); console.log(interval);
            console.log(tab_exclu);
            return tab_exclu;
        }
    };
}

const interval1 = new Interval(2,10);
const interval2 = new Interval(6,15);

console.log(interval1.exclusion(interval2));

module.exports = Interval;
