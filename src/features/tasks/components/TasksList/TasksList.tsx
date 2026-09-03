import type { Task, TaskData } from '@olegpolyakov/tasks-core';
import { SortableList } from '@olegpolyakov/ui';

import TaskItem from '../TaskItem';

export default function TasksList({
    tasks,
    selectedTask,
    hideProjects,
    hideTags,
    onSelect,
    onToggle,
    onUpdate,
    onReorder
}: {
    tasks: Task[];
    selectedTask?: Task;
    hideProjects?: boolean;
    hideTags?: boolean;
    onSelect: (task: Task) => void;
    onToggle: (id: string, completed: boolean) => void;
    onUpdate: (id: string, data: Partial<TaskData>) => void;
    onReorder?: (tasks: Task[]) => void;
}) {
    return (
        <SortableList
            as="div"
            gap="s"
            shape="rounded-m"
            variant="plain"
            interactive
            items={tasks.map(task => ({
                id: task.id,
                content: task.title
            }))}
            renderItem={(item, sortable) => {
                const task = tasks.find(t => t.id === item.id);

                return !task ? <></> : (
                    <TaskItem
                        key={task.id}
                        ref={sortable.ref}
                        task={task}
                        selected={selectedTask?.id === task.id}
                        hideProjects={hideProjects}
                        hideTags={hideTags}
                        onSelect={onSelect}
                        onToggle={onToggle}
                        onUpdate={onUpdate}
                        aria-hidden={sortable.isDragSource}
                    />
                );
            }}
            renderOverlay={draggable => {
                const task = tasks.find(t => t.id === draggable.id);

                return !task ? <></> : (
                    <TaskItem
                        task={task}
                        hideProjects={hideProjects}
                        hideTags={hideTags}
                    />
                );
            }}
            onChange={ids => {
                const reorderedTasks = ids.map(id => tasks.find(t => t.id === id)).filter(Boolean) as Task[];
                onReorder?.(reorderedTasks);
            }}
        />
    );
}