import { Box, Container, Text, Flex } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { FiUsers, FiBriefcase, FiDollarSign, FiActivity, FiCheckCircle, FiAlertCircle, FiInfo } from "react-icons/fi"

import useAuth from "@/hooks/useAuth"

export const Route = createFileRoute("/_layout/")({
  component: Dashboard,
})

function Dashboard() {
  const { user: currentUser } = useAuth()

  // 模拟数据
  const stats = [
    { title: "总用户数", value: "1,234", change: "+12%", icon: FiUsers, color: "blue.500" },
    { title: "项目总数", value: "567", change: "+8%", icon: FiBriefcase, color: "green.500" },
    { title: "总收入", value: "$12,345", change: "+23%", icon: FiDollarSign, color: "purple.500" },
    { title: "活跃用户", value: "789", change: "+5%", icon: FiActivity, color: "orange.500" },
  ]

  const recentActivities = [
    { user: "张三", action: "创建了新项目", time: "10分钟前", status: "success", icon: FiCheckCircle },
    { user: "李四", action: "更新了个人资料", time: "25分钟前", status: "info", icon: FiInfo },
    { user: "王五", action: "删除了项目", time: "1小时前", status: "error", icon: FiAlertCircle },
    { user: "赵六", action: "添加了团队成员", time: "2小时前", status: "success", icon: FiCheckCircle },
    { user: "孙七", action: "提交了报告", time: "3小时前", status: "warning", icon: FiAlertCircle },
  ]

  const quickActions = [
    { title: "创建新项目", description: "开始一个新的项目计划", icon: FiBriefcase, color: "blue.500" },
    { title: "邀请团队成员", description: "添加新成员到您的团队", icon: FiUsers, color: "green.500" },
    { title: "查看财务报表", description: "分析收入和支出", icon: FiDollarSign, color: "purple.500" },
    { title: "系统性能报告", description: "查看系统运行状态", icon: FiActivity, color: "orange.500" },
  ]

  const projectProgress = [
    { name: "前端重构项目", progress: 75, color: "blue.500" },
    { name: "后端API开发", progress: 90, color: "green.500" },
    { name: "数据库迁移", progress: 45, color: "purple.500" },
    { name: "测试覆盖率提升", progress: 60, color: "orange.500" },
  ]

  return (
    <Container maxW="full" p={4}>
      {/* 欢迎标题 */}
      <Box mb={8}>
        <Text fontSize="3xl" fontWeight="bold" mb={2}>
          欢迎回来, {currentUser?.full_name || currentUser?.email} 👋🏼
        </Text>
        <Text color="gray.600">这是您的仪表板概览，查看最新数据和活动</Text>
      </Box>

      {/* 统计卡片 */}
      <Box display="grid" gridTemplateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }} gap={4} mb={8}>
        {stats.map((stat) => (
          <Box 
            key={stat.title}
            borderWidth="1px" 
            borderRadius="lg" 
            p={4}
            bg="white"
            boxShadow="sm"
          >
            <Flex justify="space-between" align="center" mb={3}>
              <Box>
                <Text color="gray.600" fontSize="sm">{stat.title}</Text>
                <Text fontSize="2xl" fontWeight="bold">{stat.value}</Text>
                <Flex align="center" mt={1}>
                  <Text color="green.500" fontSize="sm" fontWeight="medium">{stat.change}</Text>
                  <Text color="gray.500" fontSize="sm" ml={1}>相比上月</Text>
                </Flex>
              </Box>
              <Box as={stat.icon} w={8} h={8} color={stat.color} />
            </Flex>
            {/* 简单的进度条 */}
            <Box h="2px" bg="gray.100" borderRadius="full" overflow="hidden">
              <Box h="100%" w="75%" bg={stat.color} />
            </Box>
          </Box>
        ))}
      </Box>

      {/* 主要内容区域 */}
      <Box display="grid" gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={6} mb={8}>
        {/* 最近活动 */}
        <Box borderWidth="1px" borderRadius="lg" p={4} bg="white" boxShadow="sm">
          <Text fontSize="lg" fontWeight="bold" mb={4}>最近活动</Text>
          <Box>
            {recentActivities.map((activity, index) => (
              <Flex 
                key={index} 
                align="center" 
                py={3} 
                borderBottomWidth={index < recentActivities.length - 1 ? "1px" : "0"}
                borderBottomColor="gray.100"
              >
                <Box 
                  as={activity.icon} 
                  w={5}
                  h={5}
                  color={
                    activity.status === "success" ? "green.500" :
                    activity.status === "error" ? "red.500" :
                    activity.status === "warning" ? "yellow.500" : "blue.500"
                  } 
                  mr={3}
                />
                <Box flex="1">
                  <Text fontWeight="medium">{activity.user}</Text>
                  <Text fontSize="sm" color="gray.600">{activity.action}</Text>
                </Box>
                <Box textAlign="right">
                  <Text fontSize="sm" color="gray.500">{activity.time}</Text>
                  <Text 
                    fontSize="xs" 
                    color={
                      activity.status === "success" ? "green.600" :
                      activity.status === "error" ? "red.600" :
                      activity.status === "warning" ? "yellow.600" : "blue.600"
                    }
                    fontWeight="medium"
                    mt={1}
                  >
                    {activity.status === "success" ? "成功" :
                     activity.status === "error" ? "错误" :
                     activity.status === "warning" ? "警告" : "信息"}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>

        {/* 快速操作 */}
        <Box borderWidth="1px" borderRadius="lg" p={4} bg="white" boxShadow="sm">
          <Text fontSize="lg" fontWeight="bold" mb={4}>快速操作</Text>
          <Box>
            {quickActions.map((action, index) => (
              <Flex 
                key={index}
                align="center" 
                p={3} 
                mb={3}
                borderWidth="1px"
                borderRadius="lg"
                borderColor="gray.200"
                _hover={{ bg: "gray.50", cursor: "pointer", borderColor: action.color }}
                transition="all 0.2s"
              >
                <Box as={action.icon} w={5} h={5} color={action.color} mr={3} />
                <Box flex="1">
                  <Text fontWeight="medium">{action.title}</Text>
                  <Text fontSize="sm" color="gray.600">{action.description}</Text>
                </Box>
              </Flex>
            ))}
          </Box>
        </Box>
      </Box>

      {/* 项目进度 */}
      <Box borderWidth="1px" borderRadius="lg" p={4} bg="white" boxShadow="sm" mb={8}>
        <Text fontSize="lg" fontWeight="bold" mb={4}>项目进度</Text>
        <Box>
          {projectProgress.map((project, index) => (
            <Box key={index} mb={4}>
              <Flex justify="space-between" mb={2}>
                <Text fontWeight="medium">{project.name}</Text>
                <Text color={project.color} fontWeight="bold">{project.progress}%</Text>
              </Flex>
              <Box h="8px" bg="gray.100" borderRadius="full" overflow="hidden">
                <Box h="100%" w={`${project.progress}%`} bg={project.color} />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* 底部信息 */}
      <Flex 
        justify="space-between" 
        align="center" 
        p={4} 
        borderWidth="1px" 
        borderRadius="lg" 
        bg="blue.50" 
        borderColor="blue.100"
      >
        <Box>
          <Text fontWeight="medium" color="blue.700">最后更新</Text>
          <Text fontSize="sm" color="blue.600">今天 13:30 • 数据每15分钟自动刷新</Text>
        </Box>
        <Box>
          <Text fontSize="sm" color="blue.600">需要帮助？</Text>
          <Text fontSize="sm" color="blue.700" fontWeight="medium">查看文档</Text>
        </Box>
      </Flex>
    </Container>
  )
}
