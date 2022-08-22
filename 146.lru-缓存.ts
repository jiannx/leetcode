/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
class LRUCache {

    map: Record<string, any>;
    capacity: number;

    constructor(capacity: number) {
        this.map = new Map()
        this.capacity = capacity;
    }

    get(key: number): number {
        if (this.map.has(key)) {
            let value = this.map.get(key)
            // 重新set，相当于更新到 map最后
            this.map.delete(key)
            this.map.set(key, value)
            return value
        }
        return -1
    }

    put(key: number, value: number): void {
        // 如果有，就删了再赋值
        if (this.map.has(key)) {
            this.map.delete(key)
        }

        this.map.set(key, value)

        // 判断是不是容量超了，淘汰机制
        if (this.map.size > this.capacity) {
            this.map.delete(this.map.keys().next().value)
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

