"use client"
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table'
import {Post} from "@/utils/types.ts";
import styled from "styled-components";

const columnHelper = createColumnHelper<Post>()

const columns = [
    columnHelper.accessor('title', {
        cell: info => info.getValue(),
        header: () => <span>Title</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('body', {
        cell: info => <i>{info.getValue()}</i>,
        header: () => <span>Body</span>,
        footer: info => info.column.id,
    }),
    columnHelper.accessor('reactions', {
        header: () => 'Reactions',
        cell: info => info.renderValue(),
        footer: info => info.column.id,
    }),
]

// Styled-Component
const TableContainer = styled.div`
  padding: 0.5rem;

  table {
    border: 1px solid lightgray;
  }

  tbody {
    border-bottom: 1px solid lightgray;
  }

  th {
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
    padding: 2px 4px;
  }

  tfoot {
    color: gray;
  }

  tfoot th {
    font-weight: normal;
  }
`

export default function Table({ data }: { data: Post[] }){
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <TableContainer>
            <table>
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
                <tfoot>
                {table.getFooterGroups().map(footerGroup => (
                    <tr key={footerGroup.id}>
                        {footerGroup.headers.map(header => (
                            <th key={header.id}>
                                {header.isPlaceholder
                                    ? null
                                    : flexRender(
                                        header.column.columnDef.footer,
                                        header.getContext()
                                    )}
                            </th>
                        ))}
                    </tr>
                ))}
                </tfoot>
            </table>
        </TableContainer>
    );
}