# API
## getPlayerInventory.class
```java
public class getPlayerInventory {
    public static Player player;
    //获取玩家背包中是否包含指定物品
    public static Object contains(Object object){
        return player.getInventory().contains(Material.getMaterial((String) object));
    }
    //获取玩家背包中是否包含指定数量物品
    public static Object containsAtLeast(Object object,int object1){
        return player.getInventory().containsAtLeast(new ItemStack(Material.getMaterial((String) object)),object1);
    }
    //获取玩家背包第一个含有指定物品的槽位
    public static Object first(Object object){
        return player.getInventory().first(Material.getMaterial((String) object));
    }
    //获取玩家背包第一个空槽位
    public static Object firstEmpty(){
        return player.getInventory().firstEmpty();
    }
    //获取玩家背包指定槽位的物品
    public static Object getItem(int slot){
        return player.getInventory().getItem(slot);
    }
    //将玩家背包指定槽位设为自动物品
    public static void setItem(int slot,Object item){
        player.getInventory().setItem(slot, (ItemStack) item);
    }
    //向玩家背包添加物品
    public static void addItem(Object item){
        player.getInventory().addItem((ItemStack) item);
    }
}
```
## getPlayerOpenInventory.class
```java
public class getPlayerOpenInventory {
    public static Player player;
    //获取菜单标题
    public static Object getTitle(){
        return player.getOpenInventory().getTitle();
    }
    //获取菜单指定槽位的物品
    public static Object getItem(int slot){
        return player.getOpenInventory().getItem(slot);
    }
    //设置菜单指定槽位的物品
    public static void setItem(int slot,Object item){
        player.getOpenInventory().setItem(slot, (ItemStack) item);
    }
    //向菜单添加物品
    public static void addItem(Object item){
        player.getOpenInventory().getTopInventory().addItem((ItemStack) item);
    }
}
```

## JSItemStack.class
```java
public class JSItemStack {
    //通过物品ID获取物品
    public static Object getItemStack(Object name){
        return new ItemStack(Material.getMaterial((String) name));
    }
    //通过物品获取物品ID
    public static Object getType(Object itemStack){
        ItemStack itemStack1 = (ItemStack) itemStack;
        return itemStack1.getType();
    }
    //通过物品获取物品数据
    public static Object getItemMeta(Object itemStack){
        ItemStack itemStack1 = (ItemStack) itemStack;
        return itemStack1.getItemMeta();
    }
}
```

## getPlayerItemInHand.class
```java
public class getPlayerItemInHand {

    public static Player player;
    //获取玩家手中的物品
    public static Object getItemStack(){
        return player.getItemInHand();
    }
    //获取玩家手中物品的ID
    public static Object getType(){
        return player.getItemInHand().getType();
    }
    //获取玩家手中物品的数量
    public static Object getAmount(){
        return player.getItemInHand().getAmount();
    }
    //设置玩家手中的物品类型
    public static void setType(Object type){
        player.getItemInHand().setType(Material.getMaterial((String) type));
    }
    //设置玩家手中的物品数量
    public static void setAmount(Object amount){
        player.getItemInHand().setAmount((Integer) amount);
    }
    //获取玩家手中物品的显示名称
    public static Object getDisplayName(){
        return player.getItemInHand().getItemMeta().getDisplayName();
    }
    //获取玩家手中物品的名称
    public static Object getName(){
        return player.getItemInHand().getItemMeta().getLocalizedName();
    }
    //设置物品手中物品的显示名称
    public static void setDisplayName(Object displayName){
        player.getItemInHand().getItemMeta().setDisplayName((String) displayName);
    }

}
```

## script.class
```java
public class script {

    

    public static String username;
    public static Player player;
    public static ClickType clickType;

    //设置目标玩家
    public static void setPlayer(Object name){
        script.player = Bukkit.getPlayer((String) name);
    }
    //获取点击类型
    public static Object getClickType(){
        return clickType;
    }
    //已控制台的身份执行命令
    public static void exc(Object cmd){
        Bukkit.getServer().dispatchCommand(Bukkit.getServer().getConsoleSender(),(String) cmd);
    }
    //获取玩家名称
    public static Object getName(){
        return username;
    }

}
```

## player.class
```java
public class player {

    public static Player player;

    
    //设置玩家血量
    public static void setHealth(Object health){
        player.setHealth((Double) health);
    }
    //向玩家发送消息
    public static void sendMessage(Object msg){
        player.sendMessage(translateAlternateColorCodes('&', (String) msg));
    }
    //设置玩家是否为OP
    public static void setOp(Object op){
        player.setOp((Boolean) op);
    }
    //设置玩家的游戏模式
    public static void setGameMode(Object gameMode){
        player.setGameMode(GameMode.valueOf((String) gameMode));
    }
    //设置玩家是否可以飞行
    public static void setAllowFlight(Object allowFlight){
        player.setAllowFlight((Boolean) allowFlight);
    }
    //设置玩家的显示名称
    public static void setDisplayName(Object displayName){
        player.setDisplayName((String) displayName);
    }
    //设置玩家的经验值
    public static void setExp(Object exp){
        player.setExp((Float) exp);
    }
    //设置玩家是否受到重力
    public static void setGravity(Object gravity){
        player.setGravity((Boolean) gravity);
    }
    //设置玩家是否发光
    public static void setGlowing(Object glowing){
        player.setGlowing((Boolean) glowing);
    }
    //设置玩家的无敌时间
    public static void setNoDamageTicks(Object noDamageTicks){
        player.setNoDamageTicks((Integer) noDamageTicks);
    }
    //设置玩家是否隐身
    public static void setInvisible(Object invisible){
        player.setInvisible((Boolean) invisible);
    }
    //以玩家的身份执行命令
    public static void exc(Object cmd){
        player.getServer().dispatchCommand( player, (String) cmd);
    }
    //获取玩家的名称
    public static Object getName(){
        return player.getName();
    }
    //获取玩家的血量
    public static Object getHealth(){
        return player.getHealth();
    }
    //获取玩家的显示名称
    public static Object getDisplayName(){
        return player.getDisplayName();
    }
    //获取玩家是否为OP
    public static Object isOp(){
        return player.isOp();
    }

}
```
